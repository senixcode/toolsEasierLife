import { Link, Route, Routes } from "react-router-dom"
import AuthProvider from "../providers/AuthProvider"
import Layout from "./Layout"
import SignInPage from "./SignInPage";
import RequireAuth from "./RequireAuth";
import SignUpPage from "./SignUpPage";
import PersonalAccountant from "@/domains/personal-accountant/presentation/pages/PersonalAccountant";
import Paths from "../const/Paths";

function PublicPage() {
    return (
        <div>
            <h1>Public</h1>
            <div>
                <Link
                    className='link blue-color'
                    to={Paths.singin}>
                    Iniciar sesión
                </Link>
            </div>
            <div>
                <Link
                    className='link blue-color'
                    to={Paths.singup}>
                    Registrate
                </Link>
            </div>
        </div>
    )
}

function ProtectedPage() {
    return (
        <div>

            <h1>Protected</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptatibus harum placeat? Modi voluptas, repudiandae quibusdam at inventore, maiores expedita voluptate perferendis officiis quam ipsum, nesciunt similique incidunt quaerat minus.
            Expedita ratione labore deleniti neque molestiae eaque laboriosam odio aliquid tempore? Similique maxime, exercitationem at iste perferendis repellat autem deleniti delectus fugit ipsam numquam voluptate sed iusto facilis tempore commodi!
            Earum repudiandae explicabo aperiam sit vero, quam quas dolorum illum, ad fugit enim dolor consequuntur praesentium non, in asperiores molestias debitis natus corrupti? Itaque dolorem saepe tenetur! Enim, quam qui.
            Nemo animi perferendis laudantium blanditiis consequuntur sed assumenda corrupti natus expedita libero, neque voluptatum saepe placeat cum officia quod iure soluta distinctio ullam fuga laboriosam ipsum. Eos quisquam vitae ullam.
            Magnam, ut. Nobis odit iste sunt doloremque repudiandae illum est sit ipsum. Numquam explicabo mollitia omnis aspernatur iusto officiis perferendis earum natus, beatae itaque, nam assumenda fugit iste quasi. Atque!
            Tempore dolorem accusantium accusamus possimus laudantium mollitia recusandae, animi eaque omnis doloribus sed, aut sapiente, eius rem dolor! Delectus facilis ratione explicabo, cupiditate voluptate ducimus nesciunt obcaecati odio itaque similique!
            Eum debitis iure, molestias esse earum odit consequatur delectus. Expedita maiores qui quam suscipit iste rem, quo ipsum nesciunt minus autem. Excepturi id dolorum eveniet odit maxime ut vel incidunt?
            Non a blanditiis eius voluptatum perspiciatis voluptatem nam ex cum vel dolorem fuga doloremque id dolores laboriosam aspernatur voluptate recusandae amet labore harum odit, voluptatibus, enim ullam, unde corrupti! Laborum!
            Illum eaque reprehenderit eveniet numquam laborum impedit? Accusamus distinctio omnis eaque nostrum voluptatem, aperiam exercitationem odio reiciendis quidem voluptate beatae sapiente facere, dolores nulla tempora error earum eveniet porro dignissimos!
            Enim dolor minima accusantium explicabo exercitationem! Minus eum neque totam iusto magni libero quia blanditiis facere possimus odit illo assumenda, doloremque omnis. Asperiores neque cupiditate necessitatibus consequatur accusamus iste quasi!</p>
        </div>
    )
}

function AuthRoutes() {
    return (
        <AuthProvider>
            <Routes>
                <Route element={<Layout />}>
                    <Route path={Paths.home} element={<PublicPage />} />
                    <Route
                        path={Paths.personal_accountant}
                        element={
                            <RequireAuth>
                                <PersonalAccountant />
                            </RequireAuth>
                        }
                    />
                    <Route path={Paths.singin} element={<SignInPage />} />
                    <Route path={Paths.singup} element={<SignUpPage />} />
                    <Route
                        path="/protected"
                        element={
                            <RequireAuth>
                                <ProtectedPage />
                            </RequireAuth>
                        }
                    />
                </Route>
            </Routes>
        </AuthProvider>
    )
}


export default AuthRoutes