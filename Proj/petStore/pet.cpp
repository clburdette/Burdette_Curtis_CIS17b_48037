#include "pet.h"

Pet::Pet()
{
    setName("n/a");
    setType("n/a");
    setSize("n/a");
    setColor("n/a");
}

Pet::Pet(std::string n, std::string t, std::string s, std::string c)
{
    name = n;
    type = t;
    size = s;
    color = c;
}

Pet::~Pet()
{

}

void Pet::setName(std::string n)
{
    name = n;
}

void Pet::setType(std::string t)
{
    type = t;
}

void Pet::setSize(std::string s)
{
    size = s;
}

void Pet::setColor(std::string c)
{
    color = c;
}
