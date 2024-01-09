<template>
    <div class="bg-gray-900 py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static border-bottom-1 border-gray-800" style="min-height: 84px">
        <a v-ripple class="cursor-pointer block lg:hidden text-gray-400 mt-1 p-ripple"
            v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
            <i class="pi pi-bars text-4xl"></i>
        </a>
        <div class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full bg-gray-900 left-0 top-100 z-1 shadow-2 lg:shadow-none border-1 lg:border-none border-gray-800">
            <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
                <li>
                    <router-link :to="'/apropos'" class="no-underline">
                        <a v-ripple class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple">
                            <i class="pi pi-info-circle mr-2"></i>
                            <span>Qui je suis ?</span>
                        </a>
                    </router-link>
                </li>
                <li>
                    <router-link :to="'/projets'" class="no-underline">
                        <a v-ripple class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple">
                            <i class="pi pi-folder-open mr-2"></i>
                            <span>Mes projets</span>
                        </a>
                    </router-link>
                </li>
                <li>
                    <router-link :to="'/competences'" class="no-underline">
                        <a v-ripple class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple">
                            <i class="pi pi-book mr-2"></i>
                            <span>Portefolio de Compétences</span>
                        </a>
                    </router-link>
                </li>
                <li>
                    <router-link :to="'/contact'" class="no-underline">
                        <a v-ripple class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple">
                            <span>
                                Convaincu ? Me contacter
                            </span>
                            <i class="pi pi-comment ml-2"></i>
                        </a>
                    </router-link>
                </li>
            </ul>
            <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
                <li class="flex-order-2 lg:flex-order-0">
                    <div class="flex px-6 p-3 lg:px-3 lg:py-2">
                        <span class="text-2xl font-bold" style="background: linear-gradient(90deg, rgba(0, 209, 255, 1) 0%, rgba(255, 109, 232, 1) 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; -webkit-text-fill-color: transparent;">KICIEN Tania</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>