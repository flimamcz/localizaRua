import { useState, Fragment } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const [erro, setErro] = useState(null);
  const [loading, setLoading] = useState(null);
  const BASE_URL = `https://viacep.com.br/ws/${input}/json/`;

  function valueInput({ target }) {
    const cep = target.value
      .replace("-", "")
      .replace(".", "")
      .replace(",", "")
      .trim();
    setInput(cep);
  }

  async function handleClick(e) {
    e.preventDefault()
    let response;
    let json;
    try {
      setLoading(true)
      setErro(null)
      response = await fetch(BASE_URL);
      json = await response.json();
      setData(json);
      setLoading(false)
    } catch (error) {
      setData(null)
      setErro(true)
    } finally{
      setLoading(false)
      setData(json)
    }
  }

  if(loading) return <p className="loading"></p>
  // if(erro) return (
  //   <div>
  //     <p className="await-cep">Informe um cep válido</p>
  //     <button>Retomar a página</button>
  //   </div>
  // )


  return (
    <Fragment>
      <div className="container">
        <div className="content">
          <h1>Localizar Endereço</h1>
          <form className="form" onSubmit={(e) => {e.preventDefault()}}>
            <label htmlFor="cep" className="ident-invisible">
              Informe seu cep:
            </label>
            <input
              type="text"
              name="cep"
              id="cep"
              placeholder="ex: 57041190"
              value={input}
              onChange={valueInput}
              maxLength="8"
            />
            <button className="button-search" onClick={handleClick} type="submit">
              Localizar
            </button>
          </form>
        </div>

        {data ? (
          <div className="content-cep">
            <ul>
              { data && (
                <div>
                  <li>CEP: <span className="span-info">{data.cep}</span></li>
                  <li>Logradouro: <span className="span-info">{data.logradouro}</span></li>
                  <li>Complemento: {data.complemento ? <span className="span-info">{data.complemento}</span> : <span className="span-info">Inexistente</span>}</li>
                  <li>Cairro: <span className="span-info">{data.bairro}</span></li>
                  <li>Cidade: <span className="span-info">{data.localidade}</span></li>
                  <li>Estado: <span className="span-info">{data.uf}</span></li>
                  <li>DDD: <span className="span-info">{data.ddd}</span></li>
                </div>
              )}
            </ul>
          </div>) : <p className="await-cep">Informe um CEP!</p>}
      </div>
    </Fragment>
  );


}
export default App;
