<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use App\Form\UserEditType;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use App\Service\FileUploader;






/**
 * @Route("/user")
 */
class UserController extends AbstractController
{
    /**
     * @Route("/", name="user_index", methods={"GET"})
     */
    public function index(UserRepository $userRepository): Response
    {
        //dd($userRepository->findUserIncome(7));

        return $this->render('user/index.html.twig', [
            'users' => $userRepository->findAll(),
        ]);
    }

    /**
     * @Route("/{id}", name="user_show", methods={"GET"}, requirements={"id" : "\d+"})
     */
    public function show(User $user): Response
    {
        return $this->render('user/show.html.twig', [
            'user' => $user,
        ]);
       
    }

    
    /**
     * @Route("/new", name="user_new", methods={"GET","POST"})
     */
    public function new(Request $request, UserPasswordEncoderInterface $encoder)
    {
        $user = new User();
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) {
            
            
            $user->setPassword($encoder->encodePassword($user, $user->getPassword()));
        
            
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();

            // return $this->redirectToRoute('user_index');
        }

        return $this->render('user/new.html.twig', [
            'user' => $user,
            'form' => $form->createView(),
        ]);
    }



    /**
     * @Route("/{id}/edit", name="user_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, User $user, UserPasswordEncoderInterface $encoder, FileUploader $fileUploader )
    {
        
       
        $form = $this->createForm(UserEditType::class, $user);
        
        $form->handleRequest($request);

        

        if ($form->isSubmitted() && $form->isValid()) {
            
       
            $user->setPassword($encoder->encodePassword($user, $user->getPassword()));
           
            $imageFile = $form['avatar']->getData();

            if ($imageFile) {
                $imageFileName = $fileUploader->uploadAvatar($imageFile);
                $user->setAvatar($imageFileName);
            }
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->flush();

            return $this->redirectToRoute('user_show',  ['id' => $user->getId()]);}


        return $this->render('user/edit.html.twig', [
        'user' => $user,
        'form' => $form->createView(),
        ]);
        
        }
    
    
    /**
     * @Route("/{id}", name="user_delete", methods={"DELETE"}, requirements={"id" : "\d+"})
     */
        public function delete(Request $request, User $user): Response
    {
        if ($this->isCsrfTokenValid('delete'.$user->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($user);
            $entityManager->flush();
        }

        return $this->redirectToRoute('user_index');
    }

}
