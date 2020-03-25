<?php

namespace App\Controller;

use DateTime;
use App\Entity\Output;
use App\Form\OutputType;
use App\Repository\OutputRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/output")
 */
class OutputController extends AbstractController
{
    /**
     * @Route("/", name="output_index", methods={"GET"})
     */
    public function index(OutputRepository $outputRepository): Response
    {
        return $this->render('output/index.html.twig' , [
            'outputs' => $outputRepository->findAll(),
        ]);
    }
    /**
     * @Route("/{id}", name="output_show", methods={"GET"}, requirements={"id" : "\d+"})
     */
    public function show(Output $output): Response
    {
        return $this->render('output/show.html.twig', [
            'output' => $output,
        ]);
    }
    /**
     * @Route("/new", name="output_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $output = new Output();
        $form = $this->createForm(OutputType::class, $output);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($output);
            $entityManager->flush();

            return $this->redirectToRoute('output_index');
        }

        return $this->render('output/new.html.twig', [
            'output' => $output,
            'form' => $form->createView(),
        ]);
    }



    /**
     * @Route("/{id}/edit", name="output_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Output $output): Response
    {
        $form = $this->createForm(OutputType::class, $output);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {


            $output->setUpdatedAt(new DateTime());
            $this->getDoctrine()->getManager()->flush();


            return $this->redirectToRoute('output_index');
        }

        return $this->render('output/edit.html.twig', [
            'output' => $output,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="output_delete", methods={"DELETE"}, requirements={"id" : "\d+"})
     */
    public function delete(Request $request, Output $output): Response
    {
        if ($this->isCsrfTokenValid('delete'.$output->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($output);
            $entityManager->flush();
        }

        return $this->redirectToRoute('output_index');
    }
}
