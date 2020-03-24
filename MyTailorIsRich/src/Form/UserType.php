<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('email')
            ->add('password', PasswordType::class,[
                // 'type' => PasswordType::class,
                // 'invalid_message' => 'Le mot de passe est invalide.',
                // 'options' => ['attr' => ['class' => 'password-field']],
                // 'required' => false,
                // 'first_options'  => ['label' => 'Password'],
                // 'second_options' => ['label' => 'Repeat Password'],
                // 'mapped' => false,
            ]
            )
            
            
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
