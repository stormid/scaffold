import { h } from '../../../tools/dom';
import LoginLayout from '../layouts/login';

const LoginPage = () => <LoginLayout>
    <h1>Login</h1>
    <form>
        <div class="form-row">
            <label for="un">UserName</label>
            <input type="text" id="un" name="un" />
        </div>
        <div class="form-row">
            <label for="pwd">Password</label>
            <input type="password" id="pwd" name="pwd" />
        </div>
        <a href="/home.html">Log in</a>
    </form>
</LoginLayout>;

export default LoginPage;