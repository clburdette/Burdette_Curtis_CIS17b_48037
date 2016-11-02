#include "pet.h"

Pet::Pet()
{
    setName("n/a");
    setType("n/a");
    setSize("n/a");
    setColor("n/a");
}

Pet::Pet(QString n, QString t, QString s, QString c)
{
    setName(n);
    setType(t);
    setSize(s);
    setColor(c);
}

Pet::~Pet()
{

}

void Pet::setName(QString n)
{
    name = n;
}

void Pet::setType(QString t)
{
    type = t;
}

void Pet::setSize(QString s)
{
    size = s;
}

void Pet::setColor(QString c)
{
    color = c;
}
