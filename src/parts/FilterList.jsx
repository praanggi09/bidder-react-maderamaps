import React from "react";
import Button from "../elements/Button";
import { numberWithCommas } from "../utils";

export default function FilterList({ Props }) {
    return (
        <section style={{width:'100%'}}>
            <div style={{width:'100%', boxShadow: 'rgb(0 0 0 / 12%) 0px 1px 6px 0px', borderRadius: '20px', padding: '10px' }}>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Search</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Title" aria-label="Username" aria-describedby="basic-addon1"></input>
                </div>

                <select class="input-group mb-3">
                    <option selected>Select Category</option>
                    <option value="Mobil">Mobil</option>
                    <option value="Handphone">Handphone</option>
                </select>

            </div>
        </section>
    );
}
