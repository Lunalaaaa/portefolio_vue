<template>
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div class="flex flex-column lg:flex-row justify-content-center align-items-center gap-7">
            <div class="text-center lg:text-right">
                <div class="mt-6 mb-3 font-bold text-6xl text-900">Vous êtes perdu ?</div>
                <router-link :to="'/accueil'">
                    <Button type="button" label="Revenir à la page d'accueil" class="p-button-outlined"></Button>
                </router-link>
            </div>
            <div>
                <img  src="images/notFound.png" alt="Image" class="w-full md:w-28rem" />
            </div>
        </div>
    </div>
</template>