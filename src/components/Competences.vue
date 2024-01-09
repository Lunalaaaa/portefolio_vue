<template>
    <div class="lg:flex xl:flex">
        <div class="m-auto card xl:w-3 lg:w-3 p-1">
            <Fieldset class="border-round-2xl" :pt="{
                legend: { class: 'bg-teal-300 border-round-2xl text-white' },
            }">
                <template #legend>
                    <div class="flex align-items-center gap-2 px-2">
                        <i class="pi pi-chart-bar"></i>
                        <span class="font-bold">Compétences managériales</span>
                    </div>
                </template>
                <p class="m-0">
                    <ul>
                        <li class="list-none">✨ GANTT</li>
                        <li class="list-none">✨ Diagramme d'activité</li>
                        <li class="list-none">✨ Jira</li>
                        <li class="list-none">✨ Trello</li>
                        <li class="list-none">✨ Planning Poker</li>
                        <li class="list-none">✨ Méthode SCRUM</li>
                    </ul>
                </p>
            </Fieldset>
        </div>
        <div class="m-auto card xl:w-3 lg:w-3 p-1">
            <Fieldset class="border-round-2xl" :pt="{
                legend: { class: 'bg-indigo-200 border-round-2xl text-white' },
            }">
                <template #legend>
                    <div class="flex align-items-center gap-2 px-2">
                        <i class="pi pi-cog"></i>
                        <span class="font-bold">Compétences techniques</span>
                    </div>
                </template>
                <p class="m-0">
                    <ul class="list-none">
                        <li class="list-none">✨ Web</li>
                        <ul class="list-none">
                            <li class="list-none">✨ VueJs</li>
                            <li class="list-none">✨ Symfony</li>
                            <li class="list-none">✨ Twig</li>
                            <li class="list-none">✨ Api Platform</li>
                            <li class="list-none">✨ PHP</li>
                            <li class="list-none">✨ Javascript</li>
                            <li class="list-none">✨ HTML</li>
                            <li class="list-none">✨ CSS</li>
                            <li class="list-none">✨ PrimeVue/PrimeFlex</li>
                        </ul>
                        <li class="list-none">✨ Java</li>
                        <li class="list-none">✨ JavaFX</li>
                        <li class="list-none">✨ SQL</li>
                    </ul>
                </p>
            </Fieldset>
        </div>
        <div class="m-auto card xl:w-3 lg:w-3 p-1">
            <Fieldset class="border-round-2xl" :pt="{
                legend: { class: 'bg-blue-300 border-round-2xl text-white' },
            }">
                <template #legend>
                    <div class="flex align-items-center gap-2 px-2">
                        <i class="pi pi-user"></i>
                        <span class="font-bold">Savoir être</span>
                    </div>
                </template>
                <p class="m-0">
                    <ul>
                        <li class="list-none">✨ A l'aise à l'oral</li>
                        <li class="list-none">✨ Ponctuelle</li>
                        <li class="list-none">✨ Pédagogue</li>
                    </ul>
                </p>
            </Fieldset>
        </div>
    </div>
    <div class="m-auto card xl:w-9 lg:w-9 p-2">
        <Fieldset class="border-round-2xl" :pt="{
            legend: { class: 'bg-orange-300 border-round-2xl text-white' },
        }">
            <template #legend>
                <div class="flex align-items-center gap-2 px-2">
                    <i class="pi pi-book"></i>
                    <span class="font-bold">Portfolio de compétences</span>
                </div>
            </template>
            <p class="m-0">
                <iframe src="images/notFound.png" frameborder="0" class="w-full h-screen"></iframe>
            </p>
        </Fieldset>
    </div>
</template>
<script>
export default{
    data() {
        return {
            activeTab1: 0
        }
    },
}
</script>