#-------------------------------------------------
#
# Project created by QtCreator 2016-12-05T20:21:41
#
#-------------------------------------------------

QT       += core gui

greaterThan(QT_MAJOR_VERSION, 4): QT += widgets

TARGET = PetSearch
TEMPLATE = app


SOURCES += main.cpp\
    petfind.cpp \
    login.cpp \
    register.cpp

HEADERS  += \
    petfind.h \
    login.h \
    register.h

FORMS    += \
    petfind.ui \
    login.ui \
    register.ui
