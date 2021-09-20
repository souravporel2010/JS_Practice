Person = Backbone.Model.extend();
Peaple = Backbone.Collection.extend({
    model: Person,

});
var PeapleCol = new Peaple([
    new Person({name: 'pupa'})
]);

//console.dir(p1);
Listview = Backbone.View.extend({
    tagName: 'ul',
    initialize: function() {
        this.template=_.template($('#tmp_list').html());
        this.collection.bind('all',this.render,this);
        //console.dir(this.template);
        this.render();
    },
    render: function() {
        var template= this.template;
        var el= this.$el;
        el.empty();
        this.collection.each(function(p) {
           el.append(template(p.toJSON()));     
        });
        return this;
    }
});

CreateView = Backbone.View.extend({
    initialize: function() {
        this.template= _.template($('#tmp_Create').html());
        this.render();
    },
    events: {
        'click #btn_Save': 'Save',
        'click #btn_Close': 'Close'
    },
    Save: function() {
        var person= new Person({name: $('#txtName').val()});
        PeapleCol.add(person);
        $('#txtName').val('');
    },
    Close: function() {
        this.$el.empty();
    },
    render: function() {  
        this.$el.append(this.template());
        return this;
    }
});

HomeView= Backbone.View.extend({
    initialize: function() {
        this.template= _.template($('#tmp_addnew').html());
        this.render();
    },
    events: {
        'click #btn_Addnew': 'OpenAddNew'
    },
    OpenAddNew: function() {
       new CreateView({el: '#addContainer'});
    },
    render: function() {
        this.$el.empty();
        this.$el.append(this.template());
        var listview= new Listview({collection: PeapleCol});
        $('#list').append(listview.el);
        return this;
    }
});

var homeview= new HomeView({el:'#HomeCnt'});