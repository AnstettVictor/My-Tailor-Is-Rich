<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 */
class User implements UserInterface
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $password;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Income", mappedBy="user", orphanRemoval=true)
     */
    private $income;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Output", mappedBy="user", orphanRemoval=true)
     */
    private $output;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $avatar;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $email;

   

    public function __construct()
    {
        $this->createdAt = new \DateTime();
        $this->income = new ArrayCollection();
        $this->output = new ArrayCollection();
      
    }


    public function __toString()
    {
       return $this->name;
    }
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getSalt()
    {
    }
    public function getRoles()
    {
    }
    public function eraseCredentials()
    {
    }
    public function getUsername()
    {
    }

    /**
     * @return Collection|Income[]
     */
    public function getIncome(): Collection
    {
        return $this->income;
    }

    public function addIncome(Income $income): self
    {
        if (!$this->income->contains($income)) {
            $this->income[] = $income;
            $income->setUser($this);
        }

        return $this;
    }

    public function removeIncome(Income $income): self
    {
        if ($this->income->contains($income)) {
            $this->income->removeElement($income);
            // set the owning side to null (unless already changed)
            if ($income->getUser() === $this) {
                $income->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Output[]
     */
    public function getOutput(): Collection
    {
        return $this->output;
    }

    public function addOutput(Output $output): self
    {
        if (!$this->output->contains($output)) {
            $this->output[] = $output;
            $output->setUser($this);
        }

        return $this;
    }

    public function removeOutput(Output $output): self
    {
        if ($this->output->contains($output)) {
            $this->output->removeElement($output);
            // set the owning side to null (unless already changed)
            if ($output->getUser() === $this) {
                $output->setUser(null);
            }
        }

        return $this;
    }

    public function getAvatar(): ?string
    {
        return $this->avatar;
    }

    public function setAvatar(?string $avatar): self
    {
        $this->avatar = $avatar;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

  
}
