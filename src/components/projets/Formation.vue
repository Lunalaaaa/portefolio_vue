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
            Durant mes périodes en entreprise j'ai pu être intégrée dans un groupe de formation au framework Symfony.
            Cette formation m'a permi d'apprendre les bases et bonnes pratiques du framework Symfony.
            Pendant cette formation j'ai pu découvrir les nombreuses possibilités offertes par ce framework. 
            Le but de cette formation était de créer un site répertoriant des films. 
            Nous avions aussi accès à l'API OMDb pour récupérer différentes informations des films.   
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
    <div class="card w-6 m-auto">
        <Galleria :value="images" containerStyle="max-width: 640px" :showThumbnails="true" :changeItemOnIndicatorHover="true" :showIndicatorsOnItem="true">
            <template #item="slotProps">
                <img :src="slotProps.item.src" style="width: 100%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.src" class="h-2"/>
            </template>
            <template #caption="slotProps">
                <p>{{ slotProps.item.texte }}</p>
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
                    src: '../images/notFound.png',
                    texte: 'Illustration'
                },
                {
                    src: '../images/notFound.png',
                    texte: 'Illustration2'
                },
            ]
        }
    },
}
</script>