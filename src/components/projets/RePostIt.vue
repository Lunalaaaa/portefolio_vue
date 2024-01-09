<template>
    <div>
        <router-link class="no-underline" :to="'/projets'">
            <Button label="Retour aux projets" class="bg-purple-500 border-round-3xl border-purple-500" icon="pi pi-chevron-left"/>
        </router-link>
    </div>
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div class="grid">
            <div class="col-12 md:col-6 flex align-items-center">
                <div>
                    <div class="text-blue-600 text-xl mb-3">RePost-It</div>
                    <div class="text-900 text-4xl font-bold mb-6">Application mobile gérant les dates de péremption des
                        aliments</div>
                    <div class="grid">
                        <div class="col-12 md:col-6">
                            <div class="text-900 font-medium mb-2">Mode Hors-ligne</div>
                            <div class="text-700 mb-3 line-height-3">Gestion des aliments même hors connexion</div>
                        </div>
                        <div class="col-12 md:col-6">
                            <div class="text-900 font-medium mb-2">Mode en ligne</div>
                            <div class="text-700 mb-3 line-height-3">Il est possible d'avoir la même liste sur plusieurs
                                appareils</div>
                        </div>
                        <div class="col-12 md:col-6">
                            <div class="text-900 font-medium mb-2">Notification</div>
                            <div class="text-700 mb-3 line-height-3">Un jour avant la péremption d'un aliment, une
                                notification de rappel vous sera envoyé.</div>
                        </div>
                        <div class="col-12 md:col-6">
                            <div class="text-900 font-medium mb-2">Modulable</div>
                            <div class="text-700 mb-3 line-height-3">Les sources de ce projet sont disponibles sur Github et
                                l'application est modulable pour chaque utilisation.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 md:col-6">
                <img src="/images/repostit-illustration.png" alt="Image" class="w-full">
            </div>
        </div>
    </div>
    <div class="surface-section md:px-6 lg:px-8">
        <div class="border-blue-600 font-medium text-2xl p-3 mb-3 text-900" style="border-left: 8px solid;">Projet RePost-It</div>
        <blockquote class="line-height-3 text-xl text-600 mb-4 py-0 mx-0 px-4"> “Pourquoi utiliser des post-it alors que l'on peut coder RePost-It ?” </blockquote>
        <div class="line-height-3 text-xl text-700 mb-5">Voilà la source du projet.</div>
        <div class="mb-5">
            <span>Compétences mobilisées : </span>
            <Chip label="Flutter" class="bg-blue-500 text-white mr-2"/>
            <Chip label="Maquettage avec Canvas" class="bg-purple-500 text-white mr-2"/>
            <Chip label="Établissement d'un cahier des charges" class="bg-orange-500 text-white mr-2"/>
        </div>
        <div class="line-height-3 text-lg text-700 mb-4"> 
            Ce projet est né avec ma colocataire sur le fait que la gestion des aliments dans le frigo était hasardeuse et mal paramétrée. 
            L'idée nous est donc venue de coder une application permettant gérer les aliments.
            Nous nous sommes donc renseignée sur les langages des applications mobiles et notre choix s'est arrété sur Flutter.
            Avant de coder nous avons suivi une formation en ligne pour apprendre les bases de ce langage.
            Puis après avoir découvert les possibilités nous avons rédigé un cahier des charges qui nous permettrait d'avoir une vision d'ensemble.
            Etant donné que Flutter est un langage plutôt front-end nous avons également réalisé une maquette sur Canvas.
        </div>
        <div class="text-2xl text-900 mb-4">Que contient cette application ?</div>
        <div class="line-height-3 text-lg text-700 mb-4"> 
            Pour le moment l'application contient un mode hors ligne qui stocke les aliments dans le téléphone 
            et un mode en ligne nous permettant d'avoir une liste syncronisé entre nos 2 téléphones.
            Il est possible de créer des aliments, de les consulter et de les supprimer. 
            A leur création une notification est programée un jour avant sa péremption pour rappeler de le manger.
            Si l'aliemtn est supprimé avant cette date la notification est supprimée.
            Pour les 3 premiers aliments de la liste une couleur de fond est attribuée selon sa date de péremtion par rapport au jour actuel.
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