
var mocha = require('mocha'),
    should = require('should');

var gir = require('../gir');
gir.init();

var GObject = gir.load('GObject');
var Midgard = gir.load('Midgard');
Midgard.init();

var MidgardTest = require('./midgard_connection');
var select;
var property;

describe('Midgard.SqlQuerySelectData', function() {

    it('add column', function() {
        select = new Midgard.SqlQuerySelectData({'connection':MidgardTest.cnc});
        var column = new Midgard.SqlQueryColumn({
            'queryproperty': new Midgard.QueryProperty({'property':'a'}),
            'name':'a',
            'qualifier':'t1'
        });
        //Expect exception in case of error
        select.add_column(column)
    });

    it('get columns', function() {
        var column = new Midgard.SqlQueryColumn({
            'queryproperty': new Midgard.QueryProperty({'property':'b'}),
            'name':'b',
            'qualifier':'t2'
        });
        select.add_column(column);
        
        var column = new Midgard.SqlQueryColumn({
            'queryproperty': new Midgard.QueryProperty({'property':'c'}),
            'name':'c',
            'qualifier':'t3'
        });
        select.add_column(column);

        var columns = select.get_columns();
    });

});
