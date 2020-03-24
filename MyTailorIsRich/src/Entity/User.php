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
     * @var string The hashed password
     * @ORM\Column(type="string")
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
     * @var string Email de l'utilisateur pour s'authentifier
     * @ORM\Column(type="string", length=255)
     */
    private $email;

     /**
     * @var array Liste des rôles de l'utilisateur
     * @ORM\Column(type="json")
     */
    private $roles = [];

   

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

    /**
     * @see UserInterface
     */
    public function getPassword(): ?string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    
    public function getRoles(): array
    {
        // $roles = $this->roles;
        // // guarantee every user at least has ROLE_USER
         $roles[] = 'ROLE_USER';

        return array_unique($roles);
        return $this->roles;
    }
     /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
        return null;
    }
    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }
    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->email;
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

    public function setRoles(?string $Roles): self
    {
        $this->Roles = $Roles;

        return $this;
    }

  

    
}
