import profile_container from "/public/components/list_item_component.js";

// get profile_container component
// get data or list of data for profile_container component
// for each data item, create a new element and render

let events_data;

events_data = await fetch('/data/events')
                    .then(
                        (res) => {
                            return res.json()
                        }
                    ).then(
                        (data) => {
                            return data;
                        }
                    );

let generated_events = []

for(let profile in events_data){
    let current_data_item = events_data[profile];
    let new_event = new profile_container(current_data_item.profile_container_props);
    generated_events.push(new_event);
};

ReactDOM.render(
    generated_events,
    document.getElementById('events-list')
)
