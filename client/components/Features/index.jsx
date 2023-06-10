"use client"
import Button from "./Button"
export default function Features() {
    return (
        <>
        <section class="py-24 lg:py-28 overflow-hidden">
  <div class="container px-4 mx-auto">
    <div class="flex flex-wrap -m-8">
      <div class="w-full md:w-1/3 p-8">
        <div class="max-w-xs mx-auto text-center">
          <img class="mx-auto mb-9" src="basko-assets/images/features/customize.png" alt=""/>
          <h3 class="mb-4 text-2xl font-bold tracking-tight">Customize As Needed</h3>
          <p class="mb-8 tracking-tight">We consider all the drivers of change gives you the blocks &amp; components you need to change to create.</p>
          <Button>Start Customizing</Button>
        </div>
      </div>
      <div class="w-full md:w-1/3 p-8">
        <div class="max-w-xs mx-auto text-center">
          <img class="mx-auto mb-9" src="basko-assets/images/features/smart.png" alt=""/>
          <h3 class="mb-4 text-2xl font-bold tracking-tight">Fits Existing Brand</h3>
          <p class="mb-8 tracking-tight">We consider all the drivers of change gives you the blocks &amp; components you need to change to create.</p>
          <Button>Grow Brand</Button>
        </div>
      </div>
      <div class="w-full md:w-1/3 p-8">
        <div class="max-w-xs mx-auto text-center">
          <img class="mx-auto mb-9" src="basko-assets/images/features/design.png" alt="" />
          <h3 class="mb-4 text-2xl font-bold tracking-tight">Multi-layer Design</h3>
          <p class="mb-8 tracking-tight">We consider all the drivers of change gives you the blocks &amp; components you need to change to create.</p>
          <Button>Start Designing</Button>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}