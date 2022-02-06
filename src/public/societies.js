import profile_container from "/public/components/list_item_component.js";

// get profile_container component
// get data or list of data for profile_container component
// for each data item, create a new element and render

let societies_data;

societies_data = await fetch('/data/societies')
                    .then(
                        (res) => {
                            return res.json()
                        }
                    ).then(
                        (data) => {
                            return data;
                        }
                    );

let generated_societies = []

for(let profile in societies_data){
    let current_data_item = societies_data[profile];
    let new_society = new profile_container(current_data_item.profile_container_props);
    generated_societies.push(new_society);
};

ReactDOM.render(
    generated_societies,
    document.getElementById('societies-list')
)
