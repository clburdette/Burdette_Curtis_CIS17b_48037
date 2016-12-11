#include "petfindnoui.h"
#include <QtGui>

petfindnoui::petfindnoui(QWidget *parent):QDialog(parent)
{
    cType = new QComboBox();
    cSize = new QComboBox();
    cColor = new QComboBox();
    type = new QLabel(tr("Type"));
    size = new QLabel("Size");
    color = new QLabel("Color");
    title = new QLabel("PetParent");
    instruction = new QLabel("Select your animal by type(dog, cat, etc), size, color, or a combination of the three");
    submit = new QPushButton("Submit");

    cType->addItem("any");
    cType->addItem("bird");
    cType->addItem("cat");
    cType->addItem("dog");
    cType->addItem("turtle");

    cSize->addItem("small");
    cSize->addItem("medium");
    cSize->addItem("large");

    cColor->addItem("any");
    cColor->addItem("black");
    cColor->addItem("white");
    cColor->addItem("biege");
    cColor->addItem("green");
    cColor->addItem("other");

    gLayout = new QGridLayout;
    gLayout->addWidget(cType);
    gLayout->addWidget(cSize);
    gLayout->addWidget(cColor);
    gLayout->addWidget(type);
    gLayout->addWidget(size);
    gLayout->addWidget(color);

    vLayout3 = new QVBoxLayout;
    vLayout3->addWidget(title);
    vLayout3->addItem(gLayout);

    vLayout2 = new QVBoxLayout;
    vLayout2->addWidget(instruction);
    vLayout2->addItem(vLayout3);

    vLayout1 = new QVBoxLayout;
    vLayout1->addWidget(submit);
    vLayout1->addItem(vLayout2);

    setLayout(vLayout1);



}
