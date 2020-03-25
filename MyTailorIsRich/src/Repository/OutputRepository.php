<?php

namespace App\Repository;

use App\Entity\Output;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Output|null find($id, $lockMode = null, $lockVersion = null)
 * @method Output|null findOneBy(array $criteria, array $orderBy = null)
 * @method Output[]    findAll()
 * @method Output[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class OutputRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Output::class);
    }

     /**
      * @return int Somme de toutes les colonnes amount 
      */
    
      public function totalByUser($id)
      {
          return $this->createQueryBuilder('o')
              ->select('SUM(o.amount)')
              ->addSelect('count(o.amount)')
              ->where('o.user = :id')
              ->setParameter('id', $id)
              ->getQuery()
              ->getSingleResult()
          ;
      }

    /*
    public function findOneBySomeField($value): ?Output
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
