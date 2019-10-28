<script>
    export let segment;

    import { Button } from 'sveltestrap';
    import {
        Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavItem,
        NavLink
    } from 'sveltestrap';

    let isOpen = false;

    function handleUpdate(event) {
        isOpen = event.detail.isOpen;
    }
</script>

<style>
</style>

<Navbar color="dark" dark expand="md">
<div class="container">
  <NavbarBrand href="/">Code Together</NavbarBrand>
  <NavbarToggler on:click={() => (isOpen = !isOpen)} />
  <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
    <Nav class="ml-auto" navbar>
      <NavItem>
        <NavLink href="/">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/partners">Partners</NavLink>
      </NavItem>
      <NavItem>
        <NavLink rel=prefetch href="/blog">Blog</NavLink>
      </NavItem>
      <NavItem>
        <Button href="https://discordapp.com/invite/HPK3hB6" target="_blank" color="primary">
        Join our Discord
        </Button>
      </NavItem>
    </Nav>
  </Collapse>
</div>
</Navbar>
