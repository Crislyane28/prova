<script>
  import { users } from "../stores";

  const form = {
    username: "",
    pw: "",
  };

  const addUser = () => {
    // $users = $users.concat({ ...form })
    $users = $users.concat({
      username: form.username,
      pw: form.pw,
      email: form.email,
    });

    form.username = '';
    form.pw = '';
    form.email = '';


    alert('usuário inserido');
  };
</script>

<form on:submit|preventDefault={addUser}>
  <fieldset>
    <legend>Cadastro</legend>
    <input
      type="text"
      name="username"
      bind:value={form.username}
      placeholder="username"
      required
    />
    <input
      type="password"
      name="pw"
      bind:value={form.pw}
      placeholder="password"
      required
    />
    />
    <input
    type="email"
    name="pw"
    bind:value={form.email}
    placeholder="email"
    required
  />
    <button>Cadastrar</button>
  </fieldset>
</form>

<style>
  form {
    margin-top: 2em;
  }
</style>
