<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Welcome to the Home Page
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">
        This is a protected route. You need to be authenticated to see this.
      </p>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
      <dl class="sm:divide-y sm:divide-gray-200">
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">User Info</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <pre>{{ JSON.stringify(user, null, 2) }}</pre>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
import { useAuth0 } from '@auth0/auth0-vue';

const { user } = useAuth0();
</script>
