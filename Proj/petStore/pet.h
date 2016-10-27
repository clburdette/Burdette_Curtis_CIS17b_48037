#ifndef PET_H
#define PET_H

#include <string>

class Pet
{
public:
    Pet();
    Pet(std::string, std::string, std::string, std::string);
    ~Pet();

    void setName(std::string);
    std::string getName(){return name;}
    void setType(std::string);
    std::string getType(){return type;}
    void setSize(std::string);
    std::string getSize(){return size;}
    void setColor(std::string);
    std::string getColor(){return color;}
private:
    std::string name;
    std::string type;
    std::string size;
    std::string color;

};

#endif // PET_H
