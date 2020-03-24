<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;

class UserEditType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', null, [
                'constraints' => new NotBlank,
            ])
             ->add('password', RepeatedType::class,[
                'type' => PasswordType::class,
                'invalid_message' => 'Le mot de passe est invalide.',
                'options' => ['attr' => ['class' => 'password-field']],
                'required' => false,
                'first_options'  => ['label' => 'Password'],
                'second_options' => ['label' => 'Repeat Password'],
                'mapped' => false,
             ]
             )
            ->add('email', EmailType::class,[
                'constraints' => [
                    new Email,
                    new NotBlank,
                    ]
                ])
            ->add('avatar',FileType::class,[
                'mapped' =>false,
           ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
