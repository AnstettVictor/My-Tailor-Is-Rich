<?php

namespace App\Repository;

use App\Entity\User;
use App\Entity\Income;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, User::class);
    }

     /**
      * @return User[] Return an array of User object with only her income / output
      */
    
      public function findUserIncome($id)
      {
          return $this->createQueryBuilder('u')
             ->innerJoin('App\Entity\Income','i', 'i.userId = u.id')
             ->Where('u.id = :id')
             ->setParameter('id', $id)    
             ->addSelect('SUM(i.amount)')
             ->andWhere('i.user = u')
             ->getQuery()
             ->getResult()
          ;
      }
           /**
      * @return User[] Return an array of User object with only her income / output
      */
    
     public function findUserOutput($id)
     {
         return $this->createQueryBuilder('u')
            ->innerJoin('App\Entity\Output','o', 'o.userId = u.id')
            ->Where('u.id = :id')
            ->setParameter('id', $id)    
            ->addSelect('SUM(o.amount)')
            ->andWhere('o.user = u')
            ->getQuery()
            ->getResult()
         ;
     }
    

    /*
    public function findOneBySomeField($value): ?User
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
