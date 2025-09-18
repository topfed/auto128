import React from "react";
import { useGlobal } from "../data/useContext";

const Form = () => {
  const { settings, context } = useGlobal();
  const options = (settings[context?.type] || [])?.find(
    (e) => e?.id === "Form"
  );
  return (
    <section className="bg-white">
      <div className="container cont-space">
        <p className="subtitle">{options?.subTitle}</p>
        <h2>{options?.title}</h2>
        {options?.content?.split("###")[0] && (
          <p>{options?.content?.split("###")[0]}</p>
        )}
        {options?.content?.split("###")[1] && (
          <p>{options?.content?.split("###")[1]}</p>
        )}
        <form
          action="/api/emailSend"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <fieldset>
            <input type="hidden" name="form-name" value="contact" />
            <p className="d-none">
              <input name="bot-field" />
            </p>
            <p>{options?.formContent}</p>
            <div className="d-flex flex-wrap justify-between">
              {options?.fiels?.map((e, i) => {
                return (
                  <div
                    className={`${
                      e?.type === "textarea" ? "col-12" : "col-6-space"
                    } d-flex flex-col mb-3`}
                    key={i}
                  >
                    <label htmlFor={e?.id} className="mb-2">
                      {e?.name}
                    </label>
                    {e?.type !== "textarea" && (
                      <input
                        type={e?.type}
                        id={e?.id}
                        name={e?.id}
                        placeholder={e?.palceholder}
                        required={e?.required}
                      />
                    )}
                    {e?.type === "textarea" && (
                      <textarea
                        id={e?.id}
                        name={e?.id}
                        rows={e?.rows}
                        placeholder={e?.placeholder}
                      ></textarea>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="d-flex justify-center mt-5">
              <button className="btx" type="submit">
                {options?.buttonText}
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Form;
