<?php

namespace App\Controller;

use App\Entity\Income;
use App\Form\IncomeType;
use App\Repository\IncomeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/income")
 */
class IncomeController extends AbstractController
{
    /**
     * @Route("/", name="income_index", methods={"GET"})
     */
    public function index(IncomeRepository $incomeRepository): Response
    {
        return $this->json($incomeRepository->findAll());
    }
    /**
     * @Route("/{id}", name="income_show", methods={"GET"}, requirements={"id" : "\d+"})
     */
    public function show(Income $income): Response
    {
        return $this->json($income);
    }

    /**
     * @Route("/new", name="income_new", methods={"GET"})
     */
    public function new(Request $request): Response
    {
        $income = new Income();
        $form = $this->createForm(IncomeType::class, $income, [
            'action' => $this->generateUrl('income_new_post'),
            'method' => 'POST',
        ]);
        $form->handleRequest($request);


        // if ($form->isSubmitted() && $form->isValid()) {
        //     $entityManager = $this->getDoctrine()->getManager();
        //     $entityManager->persist($income);
        //     $entityManager->flush();

        //     return $this->redirectToRoute('income_index');
        // }

        return $this->render('income/new.html.twig', [
            'income' => $income,
            'form' => $form->createView(),
        ]);
    }
       /**
     * @Route("/new", name="income_new_post", methods={"POST"})
     */
    public function newPost(Request $request)
    {
        $income = new Income();
        
        $data = $request->request->get('income');
        dd($data);
        $income->setName($data['name']);
        $income->setAmount($data['amount']);
        $em = $this->getDoctrine()->getManager();

     
        $em->persist($income);
        $em->flush();
        return $this->redirectToRoute('main');
      
    }
    /**
     * @Route("/{id}/edit", name="income_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Income $income): Response
    {
        $form = $this->createForm(IncomeType::class, $income);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('income_index');
        }

        return $this->render('income/edit.html.twig', [
            'income' => $income,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="income_delete", methods={"DELETE"}, requirements={"id" : "\d+"})
     */
    public function delete(Request $request, Income $income): Response
    {
        if ($this->isCsrfTokenValid('delete' . $income->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($income);
            $entityManager->flush();
        }

        return $this->redirectToRoute('income_index');
    }
}
