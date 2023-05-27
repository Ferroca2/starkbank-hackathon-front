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
                <q-toolbar-title>
                    <q-img
                        src="../assets/logo-binance.png"
                        height="30px"
                        width="30px"
                        class="q-mr-sm"
                    />
                    Binance
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>
