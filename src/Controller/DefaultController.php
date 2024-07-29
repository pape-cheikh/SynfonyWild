<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class DefaultController extends AbstractController
{
    #[Route(path: '/', name: 'app_index')]
      public function index(Request $request): Response
    {
        dd($request);
        return new Response('bonjour ' . $request->query->get('name'));
    }
    {
        return $this->render('Default/index.html.twig', [
            'controller_name' => 'DefaultController']);
        }
}
