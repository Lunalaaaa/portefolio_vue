<template>
    <div class="px-4 py-8 md:px-6 lg:px-8">
        <div class="text-900 font-medium text-4xl mb-4 new-info text-white">Mes projets</div>
        <p class="mt-0 p-0 mb-5 text-600 text-2xl">Ils sont classés du plus récent au plus ancien</p>
        <div class="grid -mt-3 -ml-3 -mr-3">
            <div class="col-12 md:col-6 lg:col-4">
                <div class="p-2">
                    <div class="shadow-2 p-4 surface-card border-round">
                        <Chip label="Flutter" class="bg-blue-500 text-white mr-2 mt-1"/>
                        <div class="flex justify-content-between align-items-center mb-3 mt-3">
                            <span class="text-900 font-medium text-xl">Projet Repost-It</span>
                            <span class="text-900 font-medium text-xl">
                                <router-link :to="'/projets/repostit'">
                                    <Button class="border-round-2xl bg-purple-300 border-purple-300">
                                        <i class="pi pi-eye"></i>
                                    </Button>
                                </router-link>
                            </span>
                        </div>
                        <p class="mt-0 mb-3 text-600 line-height-3">
                            Projet d'une application mobile pour stocker les dates de péremption des aliments.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12 md:col-6 lg:col-4">
                <div class="p-2">
                    <div class="shadow-2 p-4 surface-card border-round">
                        <Chip label="TWIG" class="bg-green-400 text-white mr-2 mt-1"/>
                        <Chip label="Symfony" class="bg-black-alpha-70 text-white mr-2 mt-1"/>
                        <div class="flex justify-content-between align-items-center mb-3 mt-3">
                            <span class="text-900 font-medium text-xl">Alternance</span>
                            <router-link :to="'/projets/alternance'">
                                <Button class="border-round-2xl bg-purple-300 border-purple-300">
                                    <i class="pi pi-eye"></i>
                                </Button>
                            </router-link>
                        </div>
                        <p class="mt-0 mb-3 text-600 line-height-3">
                            Reprise d'une application web d'un client de l'entreprise pour traduire le PHP en Symfony et TWIG.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12 md:col-6 lg:col-4">
                <div class="p-2">
                    <div class="shadow-2 p-4 surface-card border-round">
                        <Chip label="TWIG" class="bg-green-400 text-white mr-2 mt-1"/>
                        <Chip label="Symfony" class="bg-black-alpha-70 text-white mr-2 mt-1"/>
                        <Chip label="API" class="bg-cyan-400 text-white mr-2 mt-1"/>
                        <div class="flex justify-content-between align-items-center mb-3 mt-3">
                            <span class="text-900 font-medium text-xl">Formation Symfony</span>
                            <router-link :to="'/projets/formation'">
                                <Button class="border-round-2xl bg-purple-300 border-purple-300">
                                    <i class="pi pi-eye"></i>
                                </Button>
                            </router-link>
                        </div>
                        <p class="mt-0 mb-3 text-600 line-height-3">
                            Formation à Symfony pendant une semaine avec SensioLabs.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12 md:col-6 lg:col-4">
                <div class="p-2">
                    <div class="shadow-2 p-4 surface-card border-round">
                        <Chip label="Vue.Js" class="bg-teal-400 text-white mr-2 mt-1"/>
                        <Chip label="Symfony" class="bg-black-alpha-70 text-white mr-2 mt-1"/>
                        <Chip label="Api REST Jira / Dolibarr" class="bg-cyan-400 text-white mr-2 mt-1"/>
                        <div class="flex justify-content-between align-items-center mb-3 mt-3">
                            <span class="text-900 font-medium text-xl">Stage</span>
                            <router-link :to="'/projets/stage'">
                                <Button class="border-round-2xl bg-purple-300 border-purple-300">
                                    <i class="pi pi-eye"></i>
                                </Button>
                            </router-link>
                        </div>
                        <p class="mt-0 mb-3 text-600 line-height-3">
                            Site de support des clients de mon entreprise lié avec le Dolibarr et le Jira de celle-ci.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>    
</template>
<style>
.new-info{
    background: linear-gradient(45deg,#31DFB3 0%,#7FE5FD 25%,#E47AF9 100%);
    padding: 6px 20px;
    margin: 10px auto;
    border-radius: 20px;
    display: table;
    font-size: 18px;
}
</style>