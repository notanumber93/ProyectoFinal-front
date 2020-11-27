
const Login = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h1>Ingresa</h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <form>
                        <div className="row mt-4">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Usuario" />
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col">
                                <input type="password" className="form-control" placeholder="Contraseña" />
                            </div>
                        </div>
                        <div className="row text-center mt-4">
                            <div className="mx-auto">
                                <button type="submit" className="btn btn-dark">Ingresar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;