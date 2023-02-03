<script>
  import { currentPage, currentUser, login } from "../stores";

  const form = {
    username: "",
    pw: "",
  };

  const handleForm = async () => {
    await login(form.username, form.pw);
    if ($currentUser) {
        $currentPage = 'home';
    }
  };
</script>

<form on:submit|preventDefault={handleForm}>
  <fieldset>
    <legend>Login</legend>
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
    <button>Login</button>
  </fieldset>
</form>
