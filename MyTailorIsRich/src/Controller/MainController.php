<?php

namespace App\Controller;

use App\Repository\IncomeRepository;
use App\Repository\OutputRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{  
      /**
    * @Route("/", name="main")
    */
   public function index()
   {
       return $this->render('main/index.html.twig');
   }

    /**
     * @Route("/income", name="main_income")
     */
    public function income(IncomeRepository $incomeRepository)
    {
        return $this->json($incomeRepository->findAll());
    }
        /**
     * @Route("/output", name="main_output")
     */
    public function output(OutputRepository $outputRepository)
    {
        return $this->json($outputRepository->findAll());
    }

}
