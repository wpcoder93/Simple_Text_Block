const { Fragment } = require("react")

wp.blocks.registerBlockType( "ourplugin/are-you-paying-attention", {
    title: "Are You Paying Attention",
    icon: "smiley",
    category: "common",
    attributes: {
        companyName: { type: 'string' },
        companyPhone: { type: 'string' }
    },
    edit:function (props) {

        function updateCompanyName(event) {
            props.setAttributes({companyName: event.target.value})
        }
        
        function updateCompanyPhone(event) {
            props.setAttributes({companyPhone: event.target.value})
        }

        return (
        <Fragment>
        <label>Company Name</label>
        <input type="text" onChange={updateCompanyName} value={ props.attributes.companyName } placeholder="Company Name"/>
        <label>Company Phone</label>
        <input type="text" onChange={updateCompanyPhone} value={ props.attributes.companyPhone } placeholder="Company Phone"/>
        </Fragment> 
        )
    },
    save: function (props) {
        return (
            <Fragment>
            <h3>Company Name: {props.attributes.companyName}</h3>
            <h3>Company Phone: {props.attributes.companyPhone}</h3>
            </Fragment>
        )

    }
})