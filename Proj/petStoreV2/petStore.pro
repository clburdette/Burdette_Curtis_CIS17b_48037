#-------------------------------------------------
#
# Project created by QtCreator 2016-10-25T22:41:59
#
#-------------------------------------------------

QT       += core gui

greaterThan(QT_MAJOR_VERSION, 4): QT += widgets

TARGET = petStore
TEMPLATE = app


SOURCES += main.cpp\
        mainwindow.cpp \
    pet.cpp \
    results.cpp \
    adopt.cpp \
    checkout.cpp \
    customer.cpp \
    pay.cpp \
    regist.cpp

HEADERS  += mainwindow.h \
    pet.h \
    results.h \
    adopt.h \
    checkout.h \
    customer.h \
    pay.h \
    regist.h

FORMS    += mainwindow.ui \
    results.ui \
    adopt.ui \
    checkout.ui \
    pay.ui \
    regist.ui
