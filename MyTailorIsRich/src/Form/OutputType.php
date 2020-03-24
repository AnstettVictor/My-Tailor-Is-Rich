<?php

namespace App\Form;

use App\Entity\Output;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\PositiveOrZero;

class OutputType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, [
                'constraints' =>[
                    new NotBlank(),
                ]
            ])
            ->add('amount', IntegerType::class, [
                'constraints' =>[
                    new NotBlank(),
                    new PositiveOrZero(),
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Output::class,
        ]);
    }
}
