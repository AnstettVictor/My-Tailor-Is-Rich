<?php
namespace App\Service;


use Symfony\Component\HttpFoundation\File\UploadedFile;

class FileUploader
{

    private $targetAvatarDirectory;

    public function __construct( $targetAvatarDirectory)
    {
        $this->targetAvatarDirectory = $targetAvatarDirectory;
    }

    /**
     * Upload d'un avatar
     */
    public function uploadAvatar(UploadedFile $file)
    {

        $fileName = uniqid().'.'.$file->guessExtension();
        $file->move($this->getTargetAvatarDirectory(), $fileName);
        return $fileName;
    }

    public function getTargetAvatarDirectory()
    {
        return $this->targetAvatarDirectory;
    }



}