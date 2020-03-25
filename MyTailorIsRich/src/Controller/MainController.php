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
        $user = $this->getUser();

        $userId = $user->getId();
        return $this->json($incomeRepository->totalByUser($userId));
    }
        /**
     * @Route("/total/output", name="total_output")
     */
    public function output(OutputRepository $outputRepository)
    {
        $user = $this->getUser();

        $userId = $user->getId();
        return $this->json($outputRepository->totalByUser($userId));
    }
    
    /**
     * @Route("/solde", name="solde")
     */
    public function solde(OutputRepository $outputRepository, IncomeRepository $incomeRepository)
    {
        $user = $this->getUser();

        $userId = $user->getId();
        
       $income = $incomeRepository->totalByUser($userId);
       $output = $outputRepository->totalByUser($userId);

       $solde = [   
           'Solde Income' => $income[1],
           'Solde Output' => $output[1],
           'Solde restant' => $income[1]-$output[1],
       ];

       
    
       return $this->json($solde);
   
    }

}
