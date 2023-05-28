<script setup lang="ts">
import { useQuasar } from 'quasar';

const $q = useQuasar();

$q.dark.set(true);

</script>

<template>
    <q-layout view="lHh Lpr lFf">
        <q-header
            class="bg-dark"
        >
            <q-toolbar>
                <q-toolbar-title class="text-weight-bold">
                    <q-img
                        src="../assets/logo2.png"
                        height="30px"
                        width="200px"
                        class="q-mr-sm"
                    />
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>
