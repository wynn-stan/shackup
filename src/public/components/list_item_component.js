// objects, data and steps
// relationships/associations
// model

/**
 * Classes/objects
 * - section_container
 *      data:
 *          element type
 *          class_attributes
 *          profile_container
 *          
 * - profile_container
 *      data:
 *          element type
 *          class_attributes
 *          image_container
 *          profile_description_container
 * 
 * - image_container
 *      data:
 *          element type
 *          class_attributes
 *          image
 * 
 * - image
 *      data:
 *          element type
 *          class_attributes
 *          alt_attribute
 *          src_attribute
 *          
 * - profile_description_container
 *      data:
 *          element type
 *          class_attributes
 *          profile_header
 *          tags
 *          profile_description_text
 *          join_button
 *          card_collapse_container
 * 
 * - profile_header
 *      data:
 *          element type
 *          text
 * 
 * - tag
 *      data:
 *          element type
 *          class_attributes
 *          text
 * 
 * - profile_description_text
 *      data:
 *          element type
 *          class_attributes
 *          text
 * 
 * - join_button
 *      data:
 *          element type
 *           class_attributes
 *           type_attribute
 *           data-toggle_attribute
 *           data-target_attribute
 *           aria-expanded_attribute
 *          aria-controls_attribute
 *  
 * - card-collapse-container
 *      data:
 *          element type
 *          class_attributes
 *          id_attribute
 *          card_body
 * 
 * - card-body
 *      data:
 *          element type
 *           class_attributes
 *           text
 * 
 * 
 */

/*
    If this comment is currently visible, and the project has already been deployed, DELETE

function section_container(props){
    this.element_type = props.element_type;
    this.attributes = props.attributes;
    this.profile_containers = new profile_container(props.profile_container_props);

    return React.createElement(
        this.element_type,
        this.attributes,
        this.profile_containers
    )
} */

// export component to be used by other scripts

export default function profile_container(props){
    this.element_type = "div";
    this.attributes = {
        className:"profile container row py-4"
    };
    this.image_container = new image_container(props.image_container_props);
    this.profile_description_container = new profile_description_container(props.profile_description_container_props);

    return React.createElement(
        this.element_type,
        this.attributes,
        this.image_container,
        this.profile_description_container
    );
}

function image_container(props){
    this.element_type = "div";
    this.attributes = {
        className:"profile-image col-3"
    };
    this.image = new image(props.image_props);

    return React.createElement(
        this.element_type,
        this.attributes,
        this.image
    );
};

function image(props){
    this.element_type = "img";
    this.attributes = props.attributes;

    return React.createElement(
        this.element_type,
        this.attributes,
        null
    );

}

function profile_description_container(props){
    this.element_type = "div";
    this.attributes = {
        className:"col-8"
    };
    this.profile_header = new profile_header(props.profile_header_props);
    this.tags = new tags(props.tags_props);
    this.profile_description_text = new profile_description_text(props.profile_description_text_props);
    this.join_button = new join_button(props.join_button_props);
    this.card_collapse_container = new card_collapse_container(props.card_collapse_container_props);

    return React.createElement(
        this.element_type,
        this.attributes,
        this.profile_header,
        this.tags,
        this.profile_description_text,
        this.join_button,
        this.card_collapse_container
    )
}

function profile_header(props){
    this.element_type = "h3";
    this.attributes = {};
    this.text = props.text;

    return React.createElement(
        this.element_type,
        this.attributes,
        this.text
    );
}

function tags(tag_list){

    let generated_tags = [];

    tag_list.forEach(tag_text => {
        let tag_element = React.createElement("span", {
            "className":"badge badge-primary p-1 mr-1"
        }, tag_text);

        generated_tags.push(tag_element);
    });

    return generated_tags;
}

function profile_description_text(props){

    let generated_texts = [];

    props.texts_props.forEach(text => {
        let text_element = React.createElement(
            "p",
            {
                className:"mt-2"
            },
            text
        );

        generated_texts.push(text_element);

    });

    return generated_texts;
}

function join_button(props){
    this.element_type = "button";
    this.attributes = props.attributes;
    this.button_text = props.button_text;

    return React.createElement(
        this.element_type,
        this.attributes,
        this.button_text
    );
}

function card_collapse_container(props){
    this.element_type = "div";
    this.attributes = props.attributes;
    this.attributes.className = "collapse mt-2";
    this.card_body = new card_body(props.card_body_props);

    return React.createElement(
        this.element_type,
        this.attributes,
        this.card_body
    );
}

function card_body(props){

    let generated_text = [];

    props.texts_props.forEach(text => {
        let text_element = React.createElement("p", {
            className:"m-0"
        }, text);
        generated_text.push(text_element);
    });

    return React.createElement(
        "div",
        {
            className:"card card-body"
        },
        generated_text
    );
}