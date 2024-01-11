<template>
    <div>
        <router-link class="no-underline" :to="'/projets'">
            <Button label="Retour aux projets" class="bg-purple-500 border-round-3xl border-purple-500" icon="pi pi-chevron-left"/>
        </router-link>
    </div>
    <div class="surface-section md:px-6 lg:px-8 mt-5">
        <div class="border-blue-600 font-medium text-2xl p-3 mb-3 text-900" style="border-left: 8px solid;">Formation avec SensioLabs</div>
        <div class="text-orange-300 font-semibold text-lg mb-2">Date : 3-6 Octobre 2023</div>
        <div class="mb-5">
            <span>Compétences mobilisées : </span>
            <Chip label="Symfony" class="bg-bluegray-600 text-white mr-2"/>
            <Chip label="TWIG" class="bg-teal-500 text-white mr-2"/>
            <Chip label="API" class="bg-cyan-500 text-white mr-2"/>
        </div>
        <div class="line-height-3 text-lg text-700 mb-4"> 
            Durant mes périodes en entreprise, j'ai pu être intégrée dans un groupe de formation au framework Symfony. 
            Cette formation m'a permis d'apprendre les bases et bonnes pratiques du framework Symfony. 
            Pendant cette formation, j'ai pu découvrir les nombreuses possibilités offertes par ce framework. 
            Le but de cette formation était de créer un site répertoriant des films. Nous avions aussi accès à l'API OMDb pour récupérer différentes informations des films. 
        </div>
        <div class="text-2xl text-900 mb-4">Qu'ai-je appris durant cette formation ?</div>
        <div class="line-height-3 text-lg text-700 mb-4"> 
            🌟 L'utilisation des Voters
            <br>
            🌟 Les Formulaires avec TWIG et Symfony
            <br>
            🌟 L'ORM Doctrine
            <br>
            🌟 L'authetification avec un CRSF Token
            <br>
            🌟 Les Services
        </div>
    </div>
    <div class="m-auto text-center">
        <p>Les sources de ce projet sont disponibles <a href="https://github.com/Lunalaaaa/formationSymfony" target="_blank">ici</a>.</p>
    </div>
    <div class="card w-9 m-auto">
        <Galleria :value="images" :showThumbnails="true" :numVisible="4" :circular="true" :changeItemOnIndicatorHover="true" :showIndicatorsOnItem="true" :autoPlay="true" :transitionInterval="3000" :pt="{
            thumbnailItemContent: () => ({
                class: 'flex justify-content-center'
            })
        }">
            <template #item="slotProps">
                <img :src="slotProps.item.src" style="width: 100%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.src" style="width: 60%;"/>
            </template>
            <template #caption="slotProps">
                <p class="text-center font-bold">{{ slotProps.item.texte }}</p>
            </template>
        </Galleria>
    </div>
</template>
<script>
export default{
    data() {
        return {
            images: [
                {
                    src: '../images/formation_symfony/login.png',
                    texte: 'Formulaire de login du site'
                },
                {
                    src: '../images/formation_symfony/listeFilms.png',
                    texte: 'Liste des films dans la base de données'
                },
                {
                    src: '../images/formation_symfony/readFilm.png',
                    texte: 'Présentation d\'un film en particulier'
                },
                {
                    src: '../images/formation_symfony/createFilm.png',
                    texte: 'Formulaire de création d\'un film'
                },
            ]
        }
    },
}
</script>