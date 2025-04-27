<template>
  <form
    action="#"
    method="POST"
    class="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-12 bg-sec rounded-x rounded-t lg:rounded-b lg:rounded-t-none"
  >
    <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="first-name" class="block text-base/6 font-semibold text-fg2 dark:text-fg"
            >First name</label
          >
          <div class="mt-2.5">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              class="input"
            />
          </div>
        </div>
        <div>
          <label for="last-name" class="block text-base/6 font-semibold text-fg2 dark:text-fg"
            >Last name</label
          >
          <div class="mt-2.5">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              class="input"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-base/6 font-semibold text-fg2 dark:text-fg"
            >Email</label
          >
          <div class="mt-2.5">
            <input type="email" name="email" id="email" autocomplete="email" class="input" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="phone-number" class="block text-base/6 font-semibold text-fg2 dark:text-fg"
            >Phone number</label
          >
          <div class="mt-2.5">
            <input
              type="tel"
              name="phone-number"
              id="phone-number"
              autocomplete="tel"
              class="input"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block text-base/6 font-semibold text-fg2 dark:text-fg"
            >Message</label
          >
          <div class="mt-2.5">
            <textarea name="message" id="message" rows="4" class="input" />
          </div>
        </div>
      </div>
      <div class="mt-8 flex justify-end">
        <button type="submit" class="btn">Send message</button>
      </div>
    </div>
  </form>
</template>
