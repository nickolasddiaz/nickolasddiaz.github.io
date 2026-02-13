<script lang="ts">
import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Dropdown, DropdownItem } from "flowbite-svelte";
import {navlist} from '$lib/stores/navigation'
</script>


<Navbar class="bg-primary-100 dark:bg-primary-700">
  <NavBrand href="/">
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
        Welcome to my site
    </span>
  </NavBrand>
  <NavHamburger/>
  <NavUl>
    {#each Object.entries(navlist) as [name, path_entry] (name)}
        <NavLi  class="cursor-pointer">{name}   
            <Dropdown simple class="w-44">
                {#each path_entry as [entry_name, href] (entry_name)}
                    <DropdownItem href={href}>{entry_name}</DropdownItem>
                {/each}
            </Dropdown>
        </NavLi>
    {/each}
  </NavUl>
</Navbar>