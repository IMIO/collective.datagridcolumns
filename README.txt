.. contents::

Introduction
============

This is an additional set of **column types** for `DatagridField`__ product for Plone.

__ http://plone.org/products/datagridfield

New columns
===========

TextAreaColumn
--------------

Like the base *Column* type, just display a ``textarea`` HTML element.

Additional parameters:

``rows``
    Default: 3. Number of rows of the textarea.
``cols``
    Default: 0. Number of columns of the textarea. If not provided the
    html ``cols`` attribute is omitted and an inline style "*width: 100%*"
    wil be used instead.

Example::

            DataGridField('foo',
                      columns=("type", "description"),
                      widget = DataGridWidget(
                                columns={
                                     'type' : Column(_(u"Type")),
                                     'description' : TextAreaColumn(_(u"Description"),
                                                                    rows=10,
                                                                    cols=20),
                                },
                     ),
            ),

Dependencies
============

This product has ben tested on *Plone 3.3* and *DataGridField 1.6*. Tests and feedback with
Plone 4 and DataGridField 1.8 are welcome!

Authors
=======

This product was developed by RedTurtle Technology team.

.. image:: http://www.redturtle.it/redturtle_banner.png
   :alt: RedTurtle Technology Site
   :target: http://www.redturtle.it/

Contribute!
-----------

You are welcome to help us contribute adding new columns if you like!
