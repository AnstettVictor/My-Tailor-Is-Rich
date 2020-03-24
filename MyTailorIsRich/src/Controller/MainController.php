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
     * @Route("/total/income", name="total_income")
     */
    public function income(IncomeRepository $incomeRepository)
    {
        return $this->json($incomeRepository->total());
    }
        /**
     * @Route("/total/output", name="total_output")
     */
    public function output(OutputRepository $outputRepository)
    {
        return $this->json($outputRepository->total());
    }
    
    /**
     * @Route("/solde", name="solde")
     */
    public function solde(OutputRepository $outputRepository, IncomeRepository $incomeRepository)
    {
       $income = $incomeRepository->total();
       $output = $outputRepository->total();

       $solde = [   
           'Solde Income' => $income[1],
           'Solde Output' => $output[1],
           'Solde restant' => $income[1]-$output[1],
       ];

       
    
       return $this->json($solde);
   
    }

}
