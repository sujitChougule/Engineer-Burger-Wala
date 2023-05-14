import React, { useState } from "react";
import { Country, State } from "country-state-city";
const Shipping = () => {
  const [hNO, setHNO] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form onSubmit={submitHandler}>
          <div>
            <label>H.No.</label>
            <input
              required
              type="text"
              placeholder="Enter complete house No."
              value={hNO}
              onChange={(e) => setHNO(e.target.value)}
            />
          </div>
          <div>
            <label>City</label>
            <input
              required
              type="text"
              placeholder="Enter City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div>
            <label>Country</label>
            <select
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Country</option>
              {Country &&
                Country.getAllCountries().map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          {country && (
            <div>
              <label>State</label>
              <select
                required
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option value="">State</option>
                {State &&
                  State.getStatesOfCountry(country).map((i) => (
                    <option value={i.isoCode} key={i.isoCode}>
                      {i.name}
                    </option>
                  ))}
              </select>
            </div>
          )}
          <div>
            <label>Pin Code</label>
            <input
              required
              type="number"
              placeholder="Enter your Pin Code"
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
            />
          </div>
          <div>
            <label>Phone No.</label>
            <input
              required
              type="number"
              placeholder="Enter Phone No."
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </div>
          <button>Confirm Order</button>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
