<template>
    <div>
        <router-link class="no-underline" :to="'/projets'">
            <Button label="Retour aux projets" class="bg-purple-500 border-round-3xl border-purple-500" icon="pi pi-chevron-left"/>
        </router-link>
    </div>
    <div class="surface-section md:px-6 lg:px-8 mt-5">
        <div class="border-blue-600 font-medium text-2xl p-3 mb-3 text-900" style="border-left: 8px solid;">Sujet d'alternance</div>
        <div class="line-height-3 text-xl text-700 mb-3">Reprise d'une application web d'un client de l'entreprise.</div>
        <div class="text-orange-300 font-semibold text-lg mb-2">Date : <Chip label="En cours" class="bg-yellow-500 text-white"/></div>
        <div class="mb-5">
            <span>Compétences mobilisées : </span>
            <Chip label="Symfony" class="bg-bluegray-600 text-white mr-2"/>
            <Chip label="TWIG" class="bg-green-500 text-white mr-2"/>
        </div>
        <div class="line-height-3 text-lg text-700 mb-4"> 
            Ce projet a pour but de reprendre une application web d'un client.
            Cette application avait été codée dans un framework ancien et plus maintenu (PHP400) j'ai donc dû, 
            avec l'aide d'un autre développeur, traduire chaque fichier qui composait l'application.
            Il fallait donc traduire l'application du PHP vers Symfony et le HTML CSS en TWIG.
            Cette application permet au client de stocker des données sur ces marchandises.
            La difficulté de cette reprise étant que le client voulait la même interface il a donc fallu reprendre le CSS et corriger les propriétés dépréciées.
        </div>
        <div class="text-2xl text-900 mb-4">Comment a été codé ce site ?</div>
        <div class="line-height-3 text-lg text-700 mb-4"> 
            Cette application comprend un back-end en Symfony permettant d'authentifier les utilisateurs.
            Elle permet aussi de gérer la base de données grâce à des controllers qui gèrent les écritures/lectures en base de données. 
            Du côté front, Twig est utilisé et reprend les mêmes interfaces, mais en utilisant des templates itératifs.
            Pour classer les différentes données Datatables.net a été utilisé.
        </div>
        <div class="text-center">
            <i class="pi pi-chevron-circle-right mr-2"></i>Pour la confidentialité du client, je ne peux pas montrer de preuves de mon travail.
        </div>
    </div>
</template>