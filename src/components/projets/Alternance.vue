<template>
    <div>
        <router-link class="no-underline" :to="'/projets'">
            <Button label="Retour aux projets" class="bg-purple-500 border-round-3xl border-purple-500" icon="pi pi-chevron-left"/>
        </router-link>
    </div>
    <div class="surface-section md:px-6 lg:px-8 mt-5">
        <div class="border-blue-600 font-medium text-2xl p-3 mb-3 text-900" style="border-left: 8px solid;">Sujet d'alternance</div>
        <div class="line-height-3 text-xl text-700 mb-5">Reprise d'une application web d'un client de l'entreprise.</div>
        <div class="mb-5">
            <span>Compétences mobilisées : </span>
            <Chip label="Symfony" class="bg-bluegray-600 text-white mr-2"/>
            <Chip label="TWIG" class="bg-green-500 text-white mr-2"/>
        </div>
        <div class="line-height-3 text-lg text-700 mb-4"> 
            Ce projet a pour but de reprendre une application web d'un client.
            Cette application permet au client de stocker des données sur ces marchandises.
            La difficulté de cette reprise étant que le client voulait la même interface.
            Il fallait donc traduire l'application du PHP vers Symfony et le HTML CSS en TWIG.
        </div>
        <div class="text-2xl text-900 mb-4">Comment a été codé ce site ?</div>
        <div class="line-height-3 text-lg text-700 mb-4"> 
            Ce site comprend un back-end en Symfony permettant d'authentifier les utilisateurs.
            Il permet aussi de gérer la base de données grâce à des controllers qui gèrent les écritures/lectures en base de données. 
            Et du côté front Twig est utilisé et reprend les mêmes interfaces mais en utilisant des templates itératifs.
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