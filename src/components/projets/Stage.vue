<template>
    <div>
        <router-link class="no-underline" :to="'/projets'">
            <Button label="Retour aux projets" class="bg-purple-500 border-round-3xl border-purple-500" icon="pi pi-chevron-left"/>
        </router-link>
    </div>
    <div class="surface-section md:px-6 lg:px-8 mt-5">
        <div class="border-blue-600 font-medium text-2xl p-3 mb-3 text-900" style="border-left: 8px solid;">Sujet de stage</div>
        <div class="text-orange-300 font-semibold text-lg mb-2">Date : Mai 2023 - Juillet 2023</div>
        <div class="line-height-3 text-xl text-700 mb-5">Réalisation d'un site web de support pour les clients de mon entreprise.</div>
        <div class="mb-5">
            <span>Compétences mobilisées : </span>
            <Chip label="Symfony" class="bg-bluegray-600 text-white mr-2"/>
            <Chip label="VueJs" class="bg-teal-500 text-white mr-2"/>
            <Chip label="API REST" class="bg-cyan-500 text-white mr-2"/>
        </div>
        <div class="line-height-3 text-lg text-700 mb-4"> 
            Ce projet avait pour but de mettre en place un site permettant aux clients de déposer leurs tickets de support.
            Ils peuvent aussi consulter et/ou répondre aux tickets publics et les leurs.
            Ce site héberge également les documentations des produits de mon entreprise.
            Les clients ont également accès à leurs factures, leurs licences d'utilisations des différents produits et leurs contrats associés. 
        </div>
        <div class="text-2xl text-900 mb-4 underline">Qu'est-ce que j'ai appris pendant ce projet ?</div>
        <div class="line-height-3 text-lg text-700 mb-4"> 
            J'ai tout d'abord appris à utiliser Jira pour me créer des tickets de tâches, mais aussi à répondre aux tickets en expliquant comment j'ai fait cette tâche et où se trouve le code. 
            J'ai aussi soumis mon code à des merges request avec l'aide d'autres développeurs de l'équipe cela m'as permis de mettre en œuvre des bonnes pratiques que je ne connaissais pas. 
            J'ai aussi appris à utiliser PrimeVue/PrimeFlex et le framework VueJs. J'ai aussi pu coder en Symfony et en améliorer ma maîtrise. 
            J'ai également dû faire des présentations mensuelles de mon avancement à la direction de l'entreprise.
        </div>
        <div class="text-2xl text-900 mb-4 underline">Comment a été codé ce site ?</div>
        <div class="line-height-3 text-lg text-700 mb-4"> 
            Ce site comprend un back-end en Symfony permettant d'authentifier les utilisateurs grâce à l'API du Dolibarr de l'entreprise.
            Il gère tous les appels vers les API de Dolibarr et du Jira de l'entreprise (là où sont stocker les tickets des clients).
            Et du côté front VueJs est utilisé et lance des appels vers le back-end pour séparer les clés API et ne pas les exposer côté front.
        </div>
    </div>
    <div class="card w-9 m-auto">
        <Galleria :value="images" :showThumbnails="true" :numVisible="5" :circular="true" :changeItemOnIndicatorHover="true" :showIndicatorsOnItem="true" :autoPlay="true" :transitionInterval="3000" :pt="{
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
                    src: '../images/phl_site_support/login.png',
                    texte: 'Mire de connexion au site de support'
                },
                {
                    src: '../images/phl_site_support/accueil.png',
                    texte: 'Accueil du site de support'
                },
                {
                    src: '../images/phl_site_support/forum.png',
                    texte: 'Liste de tous les tickets Jira des clients notés comme publics'
                },
                {
                    src: '../images/phl_site_support/liste_documentation.png',
                    texte: 'Liste des différentes documentations des produits PHL et de leur téléchargement'
                },
                {
                    src: '../images/phl_site_support/tickets_historique.png',
                    texte: 'Historique du ticket avec tous les commentaires et toutes les pièces jointes associées'
                },
                {
                    src: '../images/phl_site_support/traduction.png',
                    texte: 'Fonction de traduction avec Vue i18n'
                },
            ]
        }
    },
}
</script>