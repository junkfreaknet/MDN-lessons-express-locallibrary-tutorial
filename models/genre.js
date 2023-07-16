//my first schema
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var GenreSchema=new Schema(
    {
        name:{type:String,min:3,max:100},

    }
);

/**GenreSchema
.virtual('url')
.get(function(){
    return '/catalog/genre/'+this.name;
});**/
// Virtual for this genre instance URL.
GenreSchema.virtual("url").get(function () {
    return "/catalog/genre/" + this._id;
  });
//export
module.exports=mongoose.model('Genre',GenreSchema);